import streamlit as st

st.set_page_config(page_title="ToyBox Catalog", page_icon="🧸", layout="wide")

# ---------- Sample product data ----------
TOYS = [
    {"name": "Wooden Building Blocks", "category": "Building & Construction", "price": 19.99, "age": "2-5 yrs", "emoji": "🧱", "desc": "100-piece natural wood block set for creative building."},
    {"name": "Remote Control Race Car", "category": "Vehicles", "price": 34.99, "age": "6-10 yrs", "emoji": "🏎️", "desc": "High-speed RC car with rechargeable battery."},
    {"name": "Plush Teddy Bear", "category": "Stuffed Animals", "price": 14.99, "age": "0-3 yrs", "emoji": "🧸", "desc": "Soft, cuddly bear made from hypoallergenic fabric."},
    {"name": "Classic Jigsaw Puzzle (500pc)", "category": "Puzzles & Games", "price": 12.49, "age": "8+ yrs", "emoji": "🧩", "desc": "Beautiful landscape puzzle for family game night."},
    {"name": "Superhero Action Figure Set", "category": "Action Figures", "price": 24.99, "age": "4-8 yrs", "emoji": "🦸", "desc": "Set of 5 poseable superhero figures."},
    {"name": "Dollhouse with Furniture", "category": "Dolls & Dollhouses", "price": 49.99, "age": "3-7 yrs", "emoji": "🏠", "desc": "Three-story dollhouse with miniature furniture included."},
    {"name": "Toy Drone with Camera", "category": "Vehicles", "price": 59.99, "age": "10+ yrs", "emoji": "🚁", "desc": "Easy-fly drone with built-in HD camera."},
    {"name": "Art & Craft Kit", "category": "Arts & Crafts", "price": 17.99, "age": "5-10 yrs", "emoji": "🎨", "desc": "Paints, brushes, and paper for budding artists."},
    {"name": "Board Game: Treasure Hunt", "category": "Puzzles & Games", "price": 22.99, "age": "7+ yrs", "emoji": "🗺️", "desc": "Family board game with treasure-map adventure."},
    {"name": "Stacking Rings Toy", "category": "Stuffed Animals", "price": 9.99, "age": "0-2 yrs", "emoji": "🌈", "desc": "Colorful stacking rings to develop motor skills."},
    {"name": "Robot Building Kit", "category": "Building & Construction", "price": 39.99, "age": "8+ yrs", "emoji": "🤖", "desc": "STEM kit to build and program a small robot."},
    {"name": "Toy Train Set", "category": "Vehicles", "price": 44.99, "age": "3-6 yrs", "emoji": "🚂", "desc": "Wooden train set with tracks, tunnels, and bridges."},
]

CATEGORIES = sorted(set(t["category"] for t in TOYS))

# ---------- Sidebar filters ----------
st.sidebar.title("🧸 ToyBox")
st.sidebar.markdown("Find the perfect toy!")

search = st.sidebar.text_input("Search toys", "")

selected_categories = st.sidebar.multiselect(
    "Category", CATEGORIES, default=CATEGORIES
)

min_price, max_price = st.sidebar.slider(
    "Price range ($)", 0.0, 60.0, (0.0, 60.0), step=1.0
)

sort_option = st.sidebar.selectbox(
    "Sort by", ["Name (A-Z)", "Price (Low to High)", "Price (High to Low)"]
)

# ---------- Main page ----------
st.title("🧸 ToyBox — Toy Catalog")
st.write("Browse our collection of toys for every age and interest!")

# Filter
filtered = [
    t for t in TOYS
    if t["category"] in selected_categories
    and min_price <= t["price"] <= max_price
    and search.lower() in t["name"].lower()
]

# Sort
if sort_option == "Name (A-Z)":
    filtered.sort(key=lambda t: t["name"])
elif sort_option == "Price (Low to High)":
    filtered.sort(key=lambda t: t["price"])
elif sort_option == "Price (High to Low)":
    filtered.sort(key=lambda t: t["price"], reverse=True)

st.markdown(f"**{len(filtered)} toy(s) found**")
st.divider()

if not filtered:
    st.info("No toys match your filters. Try adjusting them!")
else:
    cols_per_row = 3
    for i in range(0, len(filtered), cols_per_row):
        cols = st.columns(cols_per_row)
        for col, toy in zip(cols, filtered[i:i + cols_per_row]):
            with col:
                st.markdown(
                    f"""
                    <div style="border:1px solid #ddd; border-radius:12px; padding:16px; text-align:center; margin-bottom:16px;">
                        <div style="font-size:48px;">{toy['emoji']}</div>
                        <h4>{toy['name']}</h4>
                        <p style="color:gray; font-size:13px;">{toy['category']} • Ages {toy['age']}</p>
                        <p>{toy['desc']}</p>
                        <h3>${toy['price']:.2f}</h3>
                    </div>
                    """,
                    unsafe_allow_html=True,
                )
                if st.button("Add to Cart 🛒", key=toy["name"]):
                    if "cart" not in st.session_state:
                        st.session_state.cart = []
                    st.session_state.cart.append(toy["name"])
                    st.toast(f"Added '{toy['name']}' to cart!")

# ---------- Cart summary in sidebar ----------
st.sidebar.divider()
st.sidebar.subheader("🛒 Your Cart")
cart = st.session_state.get("cart", [])
if cart:
    for item in cart:
        st.sidebar.write(f"- {item}")
    total = sum(t["price"] for t in TOYS if t["name"] in cart)
    st.sidebar.markdown(f"**Total: ${total:.2f}**")
    if st.sidebar.button("Clear Cart"):
        st.session_state.cart = []
        st.rerun()
else:
    st.sidebar.write("Your cart is empty.")

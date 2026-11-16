const container = document.getElementById("category-container");

fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then(response => response.json())
    .then(data => {

        data.categories.forEach(category => {

            const card = document.createElement("div");
            card.classList.add("category-card");

            card.innerHTML = `
                <img 
                    src="${category.strCategoryThumb}" 
                    alt="${category.strCategory}"
                >

                <h3>${category.strCategory}</h3>

                <p>
                    ${category.strCategoryDescription.substring(0, 100)}...
                </p>
            `;

            container.appendChild(card);

        });

    })
    .catch(error => {
        console.error("Terjadi kesalahan:", error);
    });
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const imageInput = document.getElementById("images");

    // Optional: preview images before upload
    imageInput.addEventListener("change", function () {
        const previewContainer = document.getElementById("image-preview");
        if (previewContainer) previewContainer.innerHTML = "";

        Array.from(this.files).forEach(file => {
            const reader = new FileReader();
            reader.onload = function (e) {
                const img = document.createElement("img");
                img.src = e.target.result;
                img.alt = "Preview";
                img.style.width = "100px";
                img.style.margin = "5px";
                if (previewContainer) previewContainer.appendChild(img);
            };
            reader.readAsDataURL(file);
        });
    });

    // Form submission
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const item = {
            title: document.getElementById("title").value.trim(),
            description: document.getElementById("description").value.trim(),
            category: document.getElementById("category").value,
            type: document.getElementById("type").value.trim(),
            size: document.getElementById("size").value,
            condition: document.getElementById("condition").value,
            tags: document.getElementById("tags").value.split(",").map(tag => tag.trim()),
            images: [...imageInput.files].map(file => file.name) // name only; actual upload requires backend
        };

        console.log("Item Submitted:", item);

        // Simulate success
        alert("Item submitted successfully!");
        form.reset();
    });
});

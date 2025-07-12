document.querySelector('.btn-swap').onclick = () => alert("Swap request sent!");
document.querySelector('.btn-points').onclick = () => alert("Added to cart for points!");
document.querySelector('.btn-save').onclick = function () {
    this.classList.toggle('saved');
    this.innerHTML = this.classList.contains('saved') ? '<i class="fas fa-heart"></i> Saved' : '<i class="fas fa-heart"></i> Save';
};
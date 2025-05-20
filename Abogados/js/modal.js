// Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all news items
    const newsItems = document.querySelectorAll('.news-item');
    const modal = document.createElement('div');
    modal.className = 'modal hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center';
    
    // Create modal content
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content bg-white shadow-xl p-6 max-w-4xl w-full mx-4';
    
    // Add modal to body
    document.body.appendChild(modal);
    modal.appendChild(modalContent);

    // Add click event to news items
    newsItems.forEach(item => {
        item.addEventListener('click', function(e) {
            if (e.target.closest('.news-item')) {
                const title = this.querySelector('.news-title').textContent;
                const content = this.querySelector('.news-content').textContent;
                const date = this.querySelector('.news-date').textContent;

                // Create modal content
                modalContent.innerHTML = `
                    <div class="flex justify-between items-start mb-6">
                        <h2 class="text-2xl font-bold text-gray-800">${title}</h2>
                        <button class="modal-close text-gray-400 hover:text-gray-600" aria-label="Cerrar modal">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <p class="text-gray-600 mb-4">${date}</p>
                    <div class="news-full-content text-gray-700">
                        ${content}
                    </div>
                `;

                // Show modal
                modal.classList.remove('hidden');
                
                // Close modal when clicking outside
                modal.addEventListener('click', function(e) {
                    if (e.target === this) {
                        this.classList.add('hidden');
                    }
                });

                // Close modal when clicking close button
                const closeButton = modalContent.querySelector('.modal-close');
                closeButton.addEventListener('click', function() {
                    modal.classList.add('hidden');
                });
            }
        });
    });
});

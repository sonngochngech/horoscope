
const khamphangayButton = document.getElementById('khamphangay-button');

khamphangayButton.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


const luckykhamphangayButton = document.getElementById('luckykhamphangayButton');

luckykhamphangayButton.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// Hàm để tạo các tùy chọn giờ và phút
function populateTimeOptions() {
    const hourSelect = document.getElementById('hour');
    const minuteSelect = document.getElementById('minute');

    // Thêm các tùy chọn cho giờ (0 đến 24)
    for (let i = 0; i <= 24; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        hourSelect.appendChild(option);
    }

    // Thêm các tùy chọn cho phút (0 đến 59)
    for (let i = 0; i <= 59; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        minuteSelect.appendChild(option);
    }
}

// Gọi hàm để tạo tùy chọn khi trang được tải
window.onload = populateTimeOptions;



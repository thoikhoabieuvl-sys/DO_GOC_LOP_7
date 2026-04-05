/* Thiết lập cơ bản */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: #f0f8ff;
    color: #333;
    line-height: 1.6;
}

.container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
}

header {
    text-align: center;
    margin-bottom: 20px;
}

header h1 {
    color: #2c3e50;
    margin-bottom: 5px;
}

header p {
    color: #7f8c8d;
    font-size: 1.1em;
}

/* Bố cục chính */
.app-layout {
    display: flex;
    gap: 20px;
    align-items: flex-start;
}

/* Khu vực làm việc (Vẽ góc & Thước) */
.workspace {
    flex: 2;
    background-color: #fff;
    border: 2px dashed #bdc3c7;
    border-radius: 8px;
    height: 500px;
    position: relative; /* Quan trọng để xếp lớp SVG và thước */
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

#angle-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1; /* Nằm dưới cùng */
}

/* Các đường nét vẽ góc SVG */
svg line {
    stroke: #e74c3c; /* Màu cạnh của góc */
    stroke-width: 4;
    stroke-linecap: round;
}

svg circle.vertex {
    fill: #e74c3c; /* Điểm đỉnh góc */
}

/* Thước đo góc */
.protractor {
    position: absolute;
    width: 350px;
    z-index: 10; /* Nằm trên góc */
    cursor: grab;
    /* Tâm xoay sẽ được JS cập nhật linh hoạt, nhưng đặt tạm ở giữa cạnh dưới */
    transform-origin: center 85%; 
}

.protractor:active {
    cursor: grabbing;
}

#protractor-img {
    width: 100%;
    display: block;
    opacity: 0.8; /* Làm trong suốt để thấy góc bên dưới */
    pointer-events: none; /* Để sự kiện chuột không bị vướng vào ảnh */
}

/* Đánh dấu tâm thước để HS dễ đặt vào đỉnh */
.protractor-center {
    position: absolute;
    bottom: 15%; /* Vị trí tâm của ảnh thước Wikimedia */
    left: 50%;
    transform: translate(-50%, 50%);
    width: 12px;
    height: 12px;
    background-color: rgba(41, 128, 185, 0.7);
    border-radius: 50%;
    border: 2px solid white;
    pointer-events: none;
}

/* Nút cầm để xoay thước */
.rotate-handle {
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #3498db;
    color: white;
    padding: 5px 10px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: bold;
    cursor: grab;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    user-select: none;
}

.rotate-handle:active {
    cursor: grabbing;
    background-color: #2980b9;
}

/* Bảng điều khiển */
.controls.panel {
    flex: 1;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

.question-group {
    margin: 20px 0;
}

label {
    display: block;
    font-weight: bold;
    margin-bottom: 8px;
    color: #2c3e50;
}

.input-wrapper {
    display: flex;
    align-items: center;
    gap: 10px;
}

input[type="number"], select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1em;
}

.unit {
    font-weight: bold;
    color: #7f8c8d;
    white-space: nowrap;
}

/* Nút bấm */
.btn {
    display: block;
    width: 100%;
    padding: 12px;
    border: none;
    border-radius: 4px;
    font-size: 1em;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s;
}

.btn.primary {
    background-color: #8e44ad;
    color: white;
    margin-bottom: 20px;
}

.btn.primary:hover {
    background-color: #9b59b6;
}

.btn.success {
    background-color: #27ae60;
    color: white;
    margin-top: 10px;
}

.btn.success:hover {
    background-color: #2ecc71;
}

/* Phản hồi (Feedback) */
.feedback {
    margin-top: 20px;
    padding: 15px;
    border-radius: 4px;
    font-weight: bold;
    text-align: center;
}

.feedback.hidden {
    display: none;
}

.feedback.correct {
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
}

.feedback.incorrect {
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
}

.feedback.warning {
    background-color: #fff3cd;
    color: #856404;
    border: 1px solid #ffeeba;
}

/* Responsive cơ bản cho màn hình nhỏ */
@media (max-width: 768px) {
    .app-layout {
        flex-direction: column;
    }
    .workspace, .controls.panel {
        width: 100%;
    }
}
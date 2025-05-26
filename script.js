// 获取左侧导航栏的各个菜单项
const navItems = document.querySelectorAll('.nav-item');

// 获取右侧的下一级导航
const submenus = document.querySelectorAll('.submenu');

// 隐藏所有下一级导航
function hideAllSubmenus() {
    submenus.forEach(submenu => {
        submenu.style.display = 'none';
    });
}

// 当鼠标悬停在左侧菜单项时，显示对应的下一级导航
navItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        hideAllSubmenus();  // 每次显示之前，先隐藏其他的下一级导航
        const targetId = item.getAttribute('data-target');
        document.getElementById(targetId).style.display = 'block';  // 显示对应的下一级导航
    });
});

// 如果鼠标移出左侧菜单项，隐藏下一级导航
navItems.forEach(item => {
    item.addEventListener('mouseleave', () => {
        const targetId = item.getAttribute('data-target');
        document.getElementById(targetId).style.display = 'none';  // 隐藏对应的下一级导航
    });
});

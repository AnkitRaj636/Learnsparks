function showComment() {
    const name = document.getElementById('name').value.trim();
    const comment = document.getElementById('comment').value.trim();

    if (!name || !comment) return;

    document.getElementById('userName').textContent = name;
    document.getElementById('userComment').textContent = comment;

    const commentBox = document.getElementById('comment-box');
    commentBox.classList.remove('hidden');
    commentBox.classList.add('show');

    document.querySelector('.comment-form').reset();
}
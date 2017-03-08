//noinspection JSAnnotator
/**
 * Created by cadekeese on 1/26/17.
 *
 */
$(function () {

    var title = $('title').text();
    //noinspection JSAnnotator
    var footer_template = `

<div class="mdl-mini-footer__left-section">
       <div class="mdl-logo">${title}</div>
            <ul class="mdl-mini-footer__link-list">
                <li>Email: <a id="mailer" href="#">Rkarr@eastsideprep.org</a></li>
                <li>Address: 10613 NE 38th Pl, Kirkland, WA 98033</li>
            </ul>
       </div>
</div>
<dialog class="mdl-dialog mailer">
            <h4 class="mdl-dialog__title">Send An Email</h4>
            <div class="mdl-dialog__content">
                <form action="#">
                    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input class="mdl-textfield__input" type="text" id="name">
                        <label class="mdl-textfield__label" for="name">Name</label>
                    </div>
                    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input class="mdl-textfield__input" type="email" id="email">
                        <label class="mdl-textfield__label" for="email">Email</label>
                    </div>
                </form>
            </div>
            <div class="mdl-dialog__actions">
                <button type="button" class="mdl-button closeFooter2">Send</button>
                <button type="button" class="mdl-button closeFooter">Exit</button>
            </div>
  </dialog>
`;

    //noinspection JSAnnotator

    var nav_template = `
    <a class="mdl-navigation__link" href="${title !== 'Home' ? 'index.html' : '#'}">Home</a>
    <a class="mdl-navigation__link" href="${title !== 'Bio' ? 'bio.html' : '#'}">Bio</a>
    <a class="mdl-navigation__link" href="${title !== 'Portfolio' ? 'portfolio.html' : '#'}">Portfolio</a>
    <a class="mdl-navigation__link" href="${title !== 'Contact' ? 'contact.html' : '#'}">Contact</a>
    <a class="mdl-navigation__link" href="${title !== 'WIP' ? 'wip.html' : '#'}">Work In Progress</a>
`;
    $('.mdl-layout__drawer .mdl-navigation').html(nav_template);
    $('footer')
        .addClass('mdl-mini-footer')
        .html(footer_template);



    var adialog = document.querySelector('dialog.mailer');
    var showaDialogButton = document.querySelector('#mailer');
    showaDialogButton.addEventListener('click', function () {
        adialog.showModal();
    });
    adialog.querySelector('.closeFooter').addEventListener('click', function () {
        adialog.close();
    });
    adialog.querySelector('.closeFooter2').addEventListener('click', function () {
        adialog.close();
    });
});
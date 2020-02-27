function hideModal(modalname) {
    $('#' + modalname).modal('hide');

}

function loadheader() {
    document.write('<div class="flex-container">\n' +
        '        <div class="div-left">\n' +
        '            <div style="font-family: \'Montez\';font-size: x-large; color: blue">ScriBBler</div>\n' +
        '            <div style="font-family:\'Ubuntu Mono\';font-size: x-small">Explore, Imagine, Create</div>\n' +
        '        </div>\n' +
        '\n' +
        '        <div>\n' +
        '            <div style="margin-top: 10px; margin-right: 10px">\n' +
        '                <button id="SignUp" class="btn btn-primary"\n' +
        '                        style="background: blue; padding-top: 5px; padding-bottom: 5px"\n' +
        '                        data-toggle="modal" data-target="#signupModal">Sign Up\n' +
        '                </button>\n' +
        '\n' +
        '\n' +
        '                <button id="SignIn" class="btn btn-primary"\n' +
        '                        style="background: blue; padding-top: 5px; padding-bottom: 5px" data-toggle="modal"\n' +
        '                        data-target="#signinModal">Sign In\n' +
        '                </button>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '\n' +
        '    <!-- SIGNUP Modal -->\n' +
        '    <div id="signupModal" class="modal fade" role="dialog">\n' +
        '        <div class="modal-dialog" style="width: 30%">\n' +
        '\n' +
        '            <!-- Modal content-->\n' +
        '            <div class="modal-content">\n' +
        '                <!-- <div class="modal-header">\n' +
        '                 </div>-->\n' +
        '                <button type="button" class="close" data-dismiss="modal"\n' +
        '                        style="margin-right: 10px; margin-top: 7px;color: grey;opacity: inherit">&times;\n' +
        '                </button>\n' +
        '\n' +
        '                <h5 class="header">Get Started</h5>\n' +
        '\n' +
        '\n' +
        '                <hr class="line">\n' +
        '                <div class="modal-body">\n' +
        '                    <form class="needs-validation" required>\n' +
        '                        <div class="form-group">\n' +
        '                            <label for="name">Name</label>\n' +
        '                            <input type="text" class="form-control" style="background: whitesmoke;border-radius: 0"\n' +
        '                                   id="name" placeholder="Enter your name" name="name" required>\n' +
        '                        </div>\n' +
        '\n' +
        '                        <div class="form-group">\n' +
        '                            <label for="username">Username</label>\n' +
        '                            <input type="text" class="form-control" style="background: whitesmoke;border-radius: 0"\n' +
        '                                   id="username" placeholder="Enter your username" name="pwd" required>\n' +
        '                        </div>\n' +
        '\n' +
        '                        <div class="form-group">\n' +
        '                            <label for="pwd">Password</label>\n' +
        '                            <input type="password" class="form-control" style="background: whitesmoke;border-radius: 0"\n' +
        '                                   id="pwd" placeholder="Enter your password" name="pwd" required>\n' +
        '                        </div>\n' +
        '\n' +
        '                        <div class="form-group">\n' +
        '                            <label for="pwd">Confirm Password</label>\n' +
        '                            <input type="password" class="form-control" style="background: whitesmoke;border-radius: 0"\n' +
        '                                   id="repwd" placeholder="Re-enter your password" name="pwd" required>\n' +
        '                        </div>\n' +
        '\n' +
        '                        <button type="submit" class="button-submit">Sign Up</button>\n' +
        '                    </form>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '\n' +
        '        </div>\n' +
        '    </div>\n' +
        '\n' +
        '\n' +
        '    <!-- SIGN IN Modal -->\n' +
        '\n' +
        '    <div id="signinModal" class="modal fade" role="dialog">\n' +
        '        <div class="modal-dialog" style="width: 30%">\n' +
        '\n' +
        '            <div class="modal-content">\n' +
        '                <button type="button" class="close" data-dismiss="modal"\n' +
        '                        style="margin-right: 10px; margin-top: 7px;color: grey;opacity: inherit">&times;\n' +
        '                </button>\n' +
        '\n' +
        '                <h5 class="header">Welcome Back!</h5>\n' +
        '\n' +
        '\n' +
        '                <hr class="line">\n' +
        '                <div class="modal-body">\n' +
        '                    <form class="needs-validation" required>\n' +
        '                        <div class="form-group">\n' +
        '                            <label for="username_signin">Username</label>\n' +
        '                            <input type="text" class="form-control" style="background: whitesmoke;border-radius: 0"\n' +
        '                                   id="username_signin" placeholder="Enter your username" name="username" required>\n' +
        '                        </div>\n' +
        '\n' +
        '\n' +
        '                        <div class="form-group">\n' +
        '                            <label for="password_signin">Password</label>\n' +
        '                            <input type="password" class="form-control" style="background: whitesmoke;border-radius: 0"\n' +
        '                                   id="password_signin" placeholder="Enter your password" name="pwd" required>\n' +
        '                        </div>\n' +
        '\n' +
        '\n' +
        '                        <button type="submit" class="button-submit">Sign In</button>\n' +
        '\n' +
        '\n' +
        '                        <p class="not-a-member">Not a member? <font color="blue" data-toggle="modal"\n' +
        '                                                                    data-target="#signupModal"\n' +
        '                                                                    onclick="hideModal(\'signinModal\')">Sign Up</font>\n' +
        '                        </p>\n' +
        '                    </form>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '\n' +
        '        </div>\n' +
        '    </div>');

}
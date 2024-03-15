const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user');

router.get('/register', (req, res) => {
    res.render('users/register');
});

router.post('/register', async (req, res, next) => {
    try {
        const { email, username, password } = req.body;
        const user = new User({ email, username });
        const registerdUser = await User.register(user, password);
        req.login(registerdUser, err => {
            if(err) return next(err);
            req.flash('success', 'YelpCampへようこそ');
            res.redirect('/campgrounds');
        });
    } catch (e) {
        req.flash('error', e.message);
        res.redirect('/register');
    }

});

router.get('/login', (req, res) => {
    res.render('users/login');
});

router.post('/login', passport.authenticate('local', { failureFlash: true, failureRedirect: '/login',keepSessionInfo: true }), (req, res) => {
    req.flash('success', 'おかえりなさい！！');
    const redirectUrl = req.session.returnTo || '/campgrounds';
    delete req.session.returnTo;
    res.redirect(redirectUrl);
});

    // const redirectUrl = req.session.returnTo || '/campgrounds';
    // delete req.session.returnTo;
    // res.redirect(redirectUrl);
// router.get('/logout', (req, res) => {
//     req.logout(function (err) {
//         if (err) {
//             req.flash("error", "ログアウトに失敗しました。");
//             return res.redirect("/campgrounds");
//         }
//         req.flash("success", "ログアウトに成功しました。");
//         res.redirect("/campgrounds");
//     })
// }); 成功例１

// router.get('/logout', (req, res) => {
//     req.logout();
//     req.flash('success', 'ログアウトしました');
//     res.redirect('/campgrounds');
// });　動画講義通り、passportのバージョンの問題で使用不可

router.get('/logout', (req, res) => {
    req.logout((e) => {
        if (e) { return next(e); }
        req.flash('success', 'ログアウトしました!');
        res.redirect('/campgrounds');
    });
});

// 成功例2

module.exports = router;

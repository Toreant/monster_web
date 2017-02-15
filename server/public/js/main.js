/**
 * Created by apache on 16-3-29.
 */
// requirejs
requirejs.config({
    baseUrl : '/js/lib',
    skim : {
        'imagesloaded.min' : ['jquery.min','touch'],
        'jquery.Jcrop.min' : ['jquery.min'],
        'jquery.touchSwipe.min' : ['jquery.min'],
        'sangarSlider.min' : ['imagesloaded.min','jquery.touchSwipe.min'],
        'bootstrap.min' : ['jquery.min'],
        'toastr.min' : ['jquery.min']
    },
    path: {
        'jquery.min' : 'jquery.min',
        'bootstrap-markdown' : 'bootstrap-markdown',
        'imagesloaded.min' : 'imagesloaded.min',
        'jquery.Jcrop.min' : 'jquery.Jcrop.min',
        'jquery.touchSwipe.min' : 'jquery.touchSwipe.min',
        'sangarSlider.min' : 'sangarSlider.min',
        'bootstrap.min' : 'bootstrap.min',
        'toastr.min' : 'toastr.min'
    }
});

require(['jquery.min','bootstrap-markdown','imagesloaded.min','jquery.Jcrop.min','jquery.touchSwipe.min','bootstrap.min','toastr.min']
    ,function($){

});

// seajs
//seajs.config({
//    base : "/js/lib",
//    allas : {
//        "jquery" : 'jquery.min',
//        "bootstrap" : 'bootstrap.min',
//        "bootstrap-markdown" : 'bootstrap-markdown',
//        "imagesloadeds" : 'imagesloaded.min',
//        "Jcrop" : 'jquery.Jcrop.min',
//        "touch" : 'jquery.touchSwipe.min',
//        "sangarSlider" : 'sangarSlider.min',
//        "toastr" : 'toastr.min'
//    }
//});
//
//seajs.use(['jquery',"bootstrap","bootstrap-markdown","sangarSlider","toastr"],function($,bootstrap,markdown,sangarSlider,toastr) {
//    markdown.markdown();
//    sangarSlider.sangarSlider();
//});
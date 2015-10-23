/**
 * Created by apache on 15-10-23.
 */
seajs.config({
    base : '/public/js',
    alias : {
        'bundle' : 'bundle',
        'vndBnd' : 'vender.bundle',
        'vender' : 'vender'
    }
});

seajs.use(['bundle','vndBnd','vender']);
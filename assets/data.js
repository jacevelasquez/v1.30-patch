// public/data.js

  $(document).ready(function() {
    // disable Enter key
    $('html').bind('keypress', function(e) {
        if(e.keyCode == 13)
          return false;
    });

    // load user data from the database
    setTimeout(loadData($(this)), 1000);

  });

  function loadData(answers) {
    // get user data from the database
    var data = {};

    var url = window.location.href;
    var id = url.split('/').pop();
    data.url = id;

    $.ajax({
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json',
        url: '/select',
        success: function(data) {
          // console.log(data);
          for( var k in data[0] ) {
            if (data[0][k]) {
                $('select[name = '+ k +' ]').val(data[0][k]);
                $('select[name = '+ k +' ]').parent().addClass('is-dirty');
            }
            if (data[0][k]) {
                $('input[name = '+ k +' ]').val(data[0][k]);
                $('input[name = '+ k +' ]').parent().addClass('is-dirty');
            }
          }

        }
    });

  }


  $(document).on('change', 'select', function() {
    // save user answer on select
    update($(this));

  });

  $(document).on('keyup', 'input[type=text]', function() {
    // save user answer on key press
    update($(this));

  });

  function update(answer) {
    // store user answer to the database
    var data = {};

    var name = answer.attr('name');
    var value = answer.val();
    data.name = name;
    data.value = value;

    var url = window.location.href;
    var id = url.split('/').pop();
    data.eacode = id.substring(0, 12);
    data.hcn = id.substring(12, 16);
    data.shsn = id.substring(16, 20);
    data.membercode = id.substring(20, 22);

    $.ajax({
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json',
        url: '/update',
        success: function(data) {
          // console.log(data);
        }
    });

  }


  $(document).on('submit', '#survey-form', function() {
    // prevent form from submitting
    e.preventDefault();
    console.log(data);
    var data = $("#survey-form :input").serializeArray();

    // save all answers on submit
    saveData($(this));

  });

  function saveData(answer) {
    // store all answers to the database
    var data = {};

    var names = answer.attr('name');
    var values = answer.val();
    data.names = names;
    data.values = values;

    var url = window.location.href;
    var id = url.split('/').pop();
    data.eacode = id.substring(0, 12);
    data.hcn = id.substring(12, 16);
    data.shsn = id.substring(16, 20);
    data.membercode = id.substring(20, 22);

    $.ajax({
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json',
        url: '/save',
        success: function(data) {
          // console.log(data);
        }
    });

  }

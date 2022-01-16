<?php

class SearchNumber {
    private $arr = [];
    
    function __construct()
    {
        for ($i = 1; $i<=100; $i++) {
            $this->addNumber($i);
        }
    }

    function addNumber($value) {
        $this->arr[$value/10][$value%10] = $value;
    }

    function deleteNumber($value) {
        $this->arr[$value/10][$value%10] = null;
    }

    function search($value) {
        $ten_digit = $value/10;
        $digit = $value%10;

        if(array_key_exists($ten_digit, $this->arr) && 
            array_key_exists($digit, $this->arr[$ten_digit]) && 
            $this->arr[$ten_digit][$digit])
            echo "Found";
        else
            echo "Not Found";
    }
}

$num = array_key_exists('number', $_GET) && $_GET['number']? $_GET['number']:0;

$search = new SearchNumber();
$search->search($num);

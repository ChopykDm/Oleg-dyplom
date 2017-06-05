(function ($) {

  $(function () {

    var blockHeight;
    var blockWidth;
    var blocksCount;


    var containerBlockHeight = getPx(1800);
    var containerBlockWidth = getPx(2400);
    var $containerBlock;

    var blocksInRow;
    var blocksInCell;
    var blocksInContainer;

    var blocksCreated = 0;

     $('#start').click(function () {
    
        blockHeight = getPx($('#blockHeight').val());
        blockWidth = getPx($('#blockWidth').val());
        blocksCount = $('#blocksCount').val();
        blocksInRow = parseInt(containerBlockWidth / blockWidth);
        blocksInCell = parseInt(containerBlockHeight / blockHeight);
        blocksInContainer = blocksInRow * blocksInCell;
        buildBlocks();
    })

    $('#sbros').click(function () {
      $(".block").remove();
   })

    initContainerBlock();

    function initContainerBlock() {
      $containerBlock = $('<div></div>');
        $containerBlock
        .attr('id', 'container-block')
        .css({
          height: containerBlockHeight,
          width: containerBlockWidth
        });

        $('.mainField').append($containerBlock);

    }

    function buildBlocks() {
      for (var i = 0; i < blocksCount; i++) {
        if (blocksCreated < blocksInContainer) {
          buildBlock();
        }
      }
    }

    function buildBlock() {
      var $block = $('<div></div>');

      $block.css({
        height: blockHeight,
        width: blockWidth
      });

      $block.addClass('block');

      $containerBlock.append($block);
      ++blocksCreated;
    }

    function getBlock() {
    }

    function getPx(mm){
      return mm / 3;
    }
  });

})($);

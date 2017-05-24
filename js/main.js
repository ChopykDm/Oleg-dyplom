(function ($) {

  $(function () {
    var blockHeight = getPx(500);
    var blockWidth = getPx(320);
    var blocksCount = 22;

    var containerBlockHeight = getPx(1800);
    var containerBlockWidth = getPx(2400);
    var $containerBlock;

    var blocksInRow = parseInt(containerBlockWidth / blockWidth);
    var blocksInCell = parseInt(containerBlockHeight / blockHeight);
    var blocksInContainer = blocksInRow * blocksInCell;

    var blocksCreated = 0;

    initContainerBlock();
    buildBlocks();

    function initContainerBlock() {
      $containerBlock = $('<div></div>');
        $containerBlock
        .attr('id', 'container-block')
        .css({
          height: containerBlockHeight,
          width: containerBlockWidth
        });

        $('body').append($containerBlock);
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
 $(document).ready(function() {
            $('.checkbox-wrapper').slideDown();
            $('.module-checkbox').change(function() {
                $(this).closest('.module-section').find('.option-checkbox').prop('checked', this.checked);
            });
          
            $('.option-checkbox').change(function() {
                const section = $(this).closest('.module-section');
                const allChecked = section.find('.option-checkbox:checked').length === section.find('.option-checkbox').length;
                const anyChecked = section.find('.option-checkbox:checked').length > 0;
                section.find('.module-checkbox').prop('checked', allChecked || anyChecked);
                
            });
        });

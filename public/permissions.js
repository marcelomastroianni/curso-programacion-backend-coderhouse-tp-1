

      const is_admin = () => {
        const params = new URLSearchParams(window.location.search);
        let is_admin = false;
        for (const param of params) {
          if (param[0] == 'is_admin'&& param[1] == 'true') {
            is_admin = true;
          }
        }
        return is_admin;
      }
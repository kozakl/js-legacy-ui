class Cursor
{
    static init(element)
    {
        Cursor.element = element;
    }
    
    static set(type)
    {
        if (Cursor.current !== type) {
            Cursor.current = type;
            Cursor.element.style.cursor = type;
        }
    }
}

Cursor.element = null;
Cursor.current = null;

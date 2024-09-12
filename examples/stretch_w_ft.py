def is_stretched(force_threshold=9.5):
    # post-condition to check if the object is stretched
    resistance_force = perception.get_resistance_force()
    return resistance_force > force_threshold
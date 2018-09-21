import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Order

.
IncomingComponent;
}
from;
'./order.incoming.component';

describe('Order.IncomingComponent', () => {
  let component: Order.IncomingComponent;
  let fixture: ComponentFixture<Order.IncomingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Order.IncomingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Order.IncomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

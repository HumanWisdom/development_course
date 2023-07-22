import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132250Page } from './s132250.page';

describe('S132250Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132250Page;
  let fixture: ComponentFixture<S132250Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132250Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132250Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

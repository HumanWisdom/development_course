import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S614p4Page } from './s614p4.page';

describe('S614p4Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S614p4Page;
  let fixture: ComponentFixture<S614p4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S614p4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S614p4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

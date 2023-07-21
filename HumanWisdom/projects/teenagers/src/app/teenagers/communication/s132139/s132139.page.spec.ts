import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132139Page } from './s132139.page';

describe('S132139Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132139Page;
  let fixture: ComponentFixture<S132139Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132139Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132139Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

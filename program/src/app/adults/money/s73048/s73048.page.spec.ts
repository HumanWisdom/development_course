import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73048Page } from './s73048.page';

describe('S73048Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73048Page;
  let fixture: ComponentFixture<S73048Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73048Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73048Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

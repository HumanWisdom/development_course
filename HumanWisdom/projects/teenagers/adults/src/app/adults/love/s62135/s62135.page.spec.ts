import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62135Page } from './s62135.page';

describe('S62135Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62135Page;
  let fixture: ComponentFixture<S62135Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62135Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62135Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

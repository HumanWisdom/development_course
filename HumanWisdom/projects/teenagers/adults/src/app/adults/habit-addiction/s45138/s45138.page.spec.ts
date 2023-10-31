import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45138Page } from './s45138.page';

describe('S45138Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45138Page;
  let fixture: ComponentFixture<S45138Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45138Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45138Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S55007Page } from './s55007.page';

describe('S55007Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S55007Page;
  let fixture: ComponentFixture<S55007Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S55007Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S55007Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

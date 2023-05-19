import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61007Page } from './s61007.page';

describe('S61007Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61007Page;
  let fixture: ComponentFixture<S61007Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61007Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61007Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

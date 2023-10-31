import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73007Page } from './s73007.page';

describe('S73007Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73007Page;
  let fixture: ComponentFixture<S73007Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73007Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73007Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

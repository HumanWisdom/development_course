import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60058Page } from './s60058.page';

describe('S60058Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60058Page;
  let fixture: ComponentFixture<S60058Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60058Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60058Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

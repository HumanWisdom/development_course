import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45038Page } from './s45038.page';

describe('S45038Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45038Page;
  let fixture: ComponentFixture<S45038Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45038Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45038Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

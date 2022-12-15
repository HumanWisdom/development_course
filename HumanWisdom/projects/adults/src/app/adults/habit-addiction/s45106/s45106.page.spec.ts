import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45106Page } from './s45106.page';

describe('S45106Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45106Page;
  let fixture: ComponentFixture<S45106Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45106Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45106Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

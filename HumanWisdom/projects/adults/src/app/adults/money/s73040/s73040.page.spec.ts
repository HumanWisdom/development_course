import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73040Page } from './s73040.page';

describe('S73040Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73040Page;
  let fixture: ComponentFixture<S73040Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73040Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73040Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

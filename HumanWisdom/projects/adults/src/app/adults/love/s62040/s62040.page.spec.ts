import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62040Page } from './s62040.page';

describe('S62040Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62040Page;
  let fixture: ComponentFixture<S62040Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62040Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62040Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62137Page } from './s62137.page';

describe('S62137Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62137Page;
  let fixture: ComponentFixture<S62137Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62137Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62137Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

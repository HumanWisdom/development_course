import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62080tPage } from './s62080t.page';

describe('S62080tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62080tPage;
  let fixture: ComponentFixture<S62080tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62080tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62080tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

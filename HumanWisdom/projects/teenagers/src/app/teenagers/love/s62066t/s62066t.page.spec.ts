import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62066tPage } from './s62066t.page';

describe('S62066tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62066tPage;
  let fixture: ComponentFixture<S62066tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62066tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62066tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

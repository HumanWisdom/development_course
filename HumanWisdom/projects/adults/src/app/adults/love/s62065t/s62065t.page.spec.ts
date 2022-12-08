import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62065tPage } from './s62065t.page';

describe('S62065tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62065tPage;
  let fixture: ComponentFixture<S62065tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62065tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62065tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

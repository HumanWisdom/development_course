import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132170tPage } from './s132170t.page';

describe('S132170tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132170tPage;
  let fixture: ComponentFixture<S132170tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132170tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132170tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

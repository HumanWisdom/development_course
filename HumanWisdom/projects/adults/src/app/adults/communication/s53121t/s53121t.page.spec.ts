import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53121tPage } from './s53121t.page';

describe('S53121tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53121tPage;
  let fixture: ComponentFixture<S53121tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53121tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53121tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

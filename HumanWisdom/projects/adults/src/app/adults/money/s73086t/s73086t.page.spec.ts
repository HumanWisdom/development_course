import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73086tPage } from './s73086t.page';

describe('S73086tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73086tPage;
  let fixture: ComponentFixture<S73086tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73086tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73086tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

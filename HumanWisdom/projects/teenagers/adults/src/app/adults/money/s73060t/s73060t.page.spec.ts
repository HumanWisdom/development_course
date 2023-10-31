import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73060tPage } from './s73060t.page';

describe('S73060tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73060tPage;
  let fixture: ComponentFixture<S73060tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73060tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73060tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53032Page } from './s53032.page';

describe('S53032Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53032Page;
  let fixture: ComponentFixture<S53032Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53032Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53032Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59030tPage } from './s59030t.page';

describe('S59030tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59030tPage;
  let fixture: ComponentFixture<S59030tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59030tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59030tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

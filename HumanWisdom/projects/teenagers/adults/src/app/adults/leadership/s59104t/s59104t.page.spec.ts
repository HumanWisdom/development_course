import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59104tPage } from './s59104t.page';

describe('S59104tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59104tPage;
  let fixture: ComponentFixture<S59104tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59104tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59104tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

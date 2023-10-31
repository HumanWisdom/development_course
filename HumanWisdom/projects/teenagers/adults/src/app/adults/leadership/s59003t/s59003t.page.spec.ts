import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59003tPage } from './s59003t.page';

describe('S59003tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59003tPage;
  let fixture: ComponentFixture<S59003tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59003tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59003tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

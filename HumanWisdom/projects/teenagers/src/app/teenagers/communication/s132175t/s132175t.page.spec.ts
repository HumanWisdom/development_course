import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132175tPage } from './s132175t.page';

describe('S132175tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132175tPage;
  let fixture: ComponentFixture<S132175tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132175tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132175tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

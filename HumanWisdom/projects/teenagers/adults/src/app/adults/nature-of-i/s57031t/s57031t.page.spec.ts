import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57031tPage } from './s57031t.page';

describe('S57031tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57031tPage;
  let fixture: ComponentFixture<S57031tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57031tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57031tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

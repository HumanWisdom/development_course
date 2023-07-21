import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132018tPage } from './s132018t.page';

describe('S132018tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132018tPage;
  let fixture: ComponentFixture<S132018tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132018tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132018tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

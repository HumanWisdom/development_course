import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116090tPage } from './s116090t.page';

describe('S116090tPage', () => {
      
    let component:  S116090tPage;
  let fixture: ComponentFixture<S116090tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116090tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116090tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
